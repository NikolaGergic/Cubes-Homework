var key = 'AIzaSyB3wxrz2Md2MHcMubIsAr-2fcZ4lwNTDF8';
var searchButton = document.querySelector('.search button');
var videoList = document.querySelector('.video-list');
var loader = '<img id ="loader" src="img/loader.gif"/>';
var videoPreview = document.querySelector('.video-preview')

function onSearch() {
	var searchField = document.querySelector('.search input');
	
	searchField.value.trim() && getVideos(searchField.value);

	searchField.value = '';
};

function getVideos(searchValue) {

	var req = new XMLHttpRequest();

	req.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + searchValue + '&key=' + key);
	
	req.onload = function() {

		listVideos(JSON.parse(req.responseText).items);
	};

	req.send();
}

function listVideos(videos) {
	videoList.innerHTML = "";
	loader = "";
	videos.forEach(function(video) {
		addVideo(video);
	});
};


function addVideo(videoData) {
	
	var videoElement = document.createElement('div');

	var img = '<img src="' + videoData.snippet.thumbnails.medium.url + '"/>';
	var title = '<h3>' + videoData.snippet.title + '</h3>';
	var desc =  '<div class="description">' + videoData.snippet.description + '</div>';

	videoElement.innerHTML =  loader + img + '<section>' + title + desc.substring(0, 500) + '</section>';

	videoList.appendChild(videoElement);

	videoElement.querySelectorAll('h3, img').forEach(function(element) {
		element.addEventListener('click', function() {
			openVideo(videoData.id.videoId)
		});
	});

	videoElement.querySelectorAll('h3, img').forEach(function(element) {
		element.addEventListener('click', function() {
			getRel(videoData.id.videoId)
		});
	});
};

function getRel(id) {
	var reqNew = new XMLHttpRequest();

	reqNew.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId='
	 + id + '&type=video&key=' + key);
	
	reqNew.onload = function() {
	listVideos(JSON.parse(reqNew.responseText).items);
	
	};

	reqNew.send();
};


function openVideo(id) {
	videoPreview.innerHTML = '<iframe width="100%" height="600" src="https://www.youtube.com/embed/' + id + 
	'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
};

searchButton.addEventListener("click", onSearch);


