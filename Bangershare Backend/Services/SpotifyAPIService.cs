using Bangershare_Backend.Models;
using Bangershare_Backend.Models.Security;
using Bangershare_Backend.Services.Communications;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace Bangershare_Backend.Services
{
    public class SpotifyAPIService
    {
        private string trackURL = "https://api.spotify.com/v1/tracks/";
        private string authURL = "https://accounts.spotify.com/api/token";
        private static HttpClient _client;

        private readonly SpotifyConfig _spotifyConfig;

        public SpotifyAPIService(SpotifyConfig spotifyConfig) 
        {
            _client = new HttpClient();
            _client.DefaultRequestHeaders.Clear();
            _client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

            _spotifyConfig = spotifyConfig;
        }

        public async Task<BaseResponse<Song>> getSpotifySongInformation(string spotifySongId)
        {
            var response = await postAuth();

            if (!response.Success)
            {
                return new BaseResponse<Song>(response.Message);
            }

            SpotifyToken spotifyToken = response.Resource;

            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(spotifyToken.token_type, spotifyToken.access_token);

            var result = await _client.GetAsync(trackURL + spotifySongId);

            if (result.IsSuccessStatusCode)
            {
                var jsonString = await result.Content.ReadAsStringAsync();
                var obj = JsonConvert.DeserializeObject<SpotifySongModel>(jsonString);

                throw new NotImplementedException();
            }
            else
            {
                return new BaseResponse<Song>(message: string.Format("{0} ({1})", (int)result.StatusCode, result.ReasonPhrase));
            }
        }

        private async Task<BaseResponse<SpotifyToken>> postAuth()
        {
            //Prepare Request Body
            List<KeyValuePair<string, string>> requestData = new List<KeyValuePair<string, string>>();
            requestData.Add(new KeyValuePair<string, string>("grant_type", "client_credentials"));

            FormUrlEncodedContent requestBody = new FormUrlEncodedContent(requestData);

            string credentials = string.Format("{0}:{1}", _spotifyConfig.ClientID, _spotifyConfig.Secret);

            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.UTF8.GetBytes(credentials)));

            var result = await _client.PostAsync(authURL, requestBody);
            if (result.IsSuccessStatusCode)
            {
                var jsonString = await result.Content.ReadAsStringAsync();

                return new BaseResponse<SpotifyToken>(JsonConvert.DeserializeObject<SpotifyToken>(jsonString));
            }
            else
            {
                return new BaseResponse<SpotifyToken>(message: string.Format("{0} ({1})", (int)result.StatusCode, result.ReasonPhrase));
            }
        }
    }

    internal class SpotifyToken
    {
        public string access_token { get; set; }
        public string token_type { get; set; }
        public long expires_in { get; set; }
    }

    internal class SpotifyArtistModel
    {
        public string name { get; set; }
    }

    internal class SpotifySongModel
    {
        public SpotifyArtistModel[] artists { get; set; }
        public string name { get; set; }
    }
}
