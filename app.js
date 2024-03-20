fetch('http://localhost:3000/fetch?' + new URLSearchParams({
    sidoCode: '27',
    sggCode: '27140',
}))
.then(res => res.json())
.then(data => {
    console.log(data)
    console.log(data.kinderInfo)
})
