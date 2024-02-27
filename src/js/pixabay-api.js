import axios from 'axios';

export class PixabayApi{
	constructor() {
		this.BASE_URL = 'https://pixabay.com';
    this.API_KEY = '42471914-569b5fe5af65bb61df6e415c6';
    this.perPage = 15;
    axios.defaults.baseURL = this.BASE_URL;
	}

  async getImages(userQuery, userPage = 1) {
    const params = new URLSearchParams({
      key: this.API_KEY,
      q: userQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.perPage,
      page: userPage,
    });
    const res = await axios.get('/api/', {params});

    return res.data;
  }
}