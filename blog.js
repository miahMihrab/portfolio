let post = ''
fetch('./blogPost.json').then(response => {
    return response.json();
}).then(data => {
    //console.log(JSON.stringify(data.post1.post));

    let i = 0;
    data.forEach((element) => {
        // console.log(data[0].post);
        // console.log(data[1].post);
        console.log(element.post)
        blog.innerHTML += `<div>
                        <h3 style="color: black">${element.post}</h3>
                        <span style='font-size: 0.7rem'>${element.postdate}</span>
                     </div>`
        i++;
    });
    // for (let i = 1; i <= 2; i++) {
    //     post = data[0].post
    //     console.log(post)
    // }
    // post = data.post1.post
    // const blog = document.querySelector('#blog');
    // blog.innerHTML += `<div>
    //                     <p>${post}</p>
    //                 </div>`
    // blog.innerHTML += `<div>
    //                     <p>Another POST</p>
    //                 </div>`
    // blog.innerHTML += `<div>
    //                     <p>Third POST</p>
    //                 </div>`
    // blog.innerHTML += `<div>
    //                     <p>Fourth POST</p>
    //                 </div>`
})