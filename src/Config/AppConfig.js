class AppConfig {
  today = new Date();
  // https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
  baseUrl = "https://newsapi.org/v2/";
  key = "001de307a28b43799cc64ec7790caaeb";
  APIkey = "&apiKey=" + this.key;
  defaultReq =
    this.baseUrl +
    "/top-headlines?country=us" +
    // this.today +
    this.APIkey;
}
const appConfig = new AppConfig();

export default appConfig;

// https://newsapi.org/v2/top-headlines?country=us&apiKey=001de307a28b43799cc64ec7790caaeb
