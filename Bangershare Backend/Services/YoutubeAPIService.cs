using Bangershare_Backend.Models;
using Bangershare_Backend.Services.Communications;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Bangershare_Backend.Services
{
    public class YoutubeAPIService
    {
        private string baseUrl = "https://www.googleapis.com/youtube/v3/";
        private static HttpClient _client;
        private readonly YoutubeConfig _youtubeConfig;

        public YoutubeAPIService(YoutubeConfig youtubeConfig)
        {
            _client = new HttpClient();
            _client.DefaultRequestHeaders.Clear();
            _client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

            _youtubeConfig = youtubeConfig;
        }

        public async Task<BaseResponse<Song>> getYoutubeVideoInfo(string videoId, Song song)
        {
            var response = await _client.GetAsync(baseUrl + "videos?id=" + videoId + "&key=" + _youtubeConfig.Key + "&part=contentDetails");

            if (response.IsSuccessStatusCode)
            {
                var jsonString = await response.Content.ReadAsStringAsync();
                YoutubeVideo youtubeVideo = JsonConvert.DeserializeObject<YoutubeVideo>(jsonString);

                // converts from a XML time span to ms 
                var duration = Convert.ToInt32(System.Xml.XmlConvert.ToTimeSpan(youtubeVideo.items[0].contentDetails.duration).TotalMilliseconds);

                song.Duration = duration;
                song.SongType = SongType.Youtube;

                return new BaseResponse<Song>(song);
            }
            else
            {
                return new BaseResponse<Song>(message: string.Format("{0} ({1})", (int)response.StatusCode, response.ReasonPhrase));
            }

            throw new NotImplementedException(); 
        }

        internal class YoutubeVideo
        {
            public Item[] items { get; set; }
        }

        internal class Item
        {
            public Content contentDetails { get; set; }
        }

        internal class Content
        {
            public string duration { get; set; }
        }
    }
}
