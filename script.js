const url = "https://jsonplaceholder.typicode.com/posts";

function posts() {

    fetch(url)
        .then(res => res.json())
        .then(post => postData(post))
}

function postData(post) {
    const div1 = document.getElementById('post-container');
    for (data of post) {
        const div = document.createElement('div');
        div.classList.add('post-container');
        div.innerHTML = `<h4> User id:${data.id} </h4><br>
                    <h5> post title:${data.title} </h5><br>
                    <h6> post:${data.body} </h6><br>
        
        `;
        div1.appendChild(div);
    }
}