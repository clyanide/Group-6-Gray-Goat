using AutoMapper.Configuration;
using Bangershare_Backend.Models;
using Bangershare_Backend.Services.Communications;
using System;
using System.Collections.Generic;
using System.Linq;
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
        private HttpClient _client;

        private readonly SpotifyConfig _spotifyConfig;

        public SpotifyAPIService(SpotifyConfig spotifyConfig) 
        {
            _spotifyConfig = spotifyConfig;
            _client = new HttpClient();
        }

        public async Task<BaseResponse<Song>> getSpotifySongInformation()
        {
            await postAuth();
            throw new NotImplementedException();
        }

        private async Task postAuth()
        {
            _client.DefaultRequestHeaders.Clear();
            _client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

            //Prepare Request Body
            List<KeyValuePair<string, string>> requestData = new List<KeyValuePair<string, string>>();
            requestData.Add(new KeyValuePair<string, string>("grant_type", "client_credentials"));

            FormUrlEncodedContent requestBody = new FormUrlEncodedContent(requestData);

            var credentials = String.Format("{0}:{1}", _spotifyConfig.ClientID, _spotifyConfig.Secret);

            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.UTF8.GetBytes(credentials)));

            var result = await _client.PostAsync(authURL, requestBody);
            var respone = await result.Content.ReadAsStringAsync();
            var token = Newtonsoft.Json.JsonConvert.DeserializeObject<Bangershare_Backend.Models.Security.AccessToken>(respone);
        }
    }
}
