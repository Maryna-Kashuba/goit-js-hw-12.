export class PixabayApi{
	constructor() {
		this.BASE_URL = 'https://pixabay.com/api/';
		this.API_KEY='42471914-569b5fe5af65bb61df6e415c6'
	}

  getImages(userQuery) {
    const searchParams = new URLSearchParams({
      key: this.API_KEY,
      q: userQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `${this.BASE_URL}?${searchParams}`;

    return fetch(url).then(res => res.json());
  }
}