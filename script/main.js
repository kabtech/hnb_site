function fnShowHide(argDiv) {
    var s1 = document.getElementById('HOME');
    var s2 = document.getElementById('BIO');
    var s3 = document.getElementById('CONTACT');
    var s4 = document.getElementById('FOLLOW');
    var s5 = document.getElementById('ARTISTRY');
    var s6 = document.getElementById('LIKES');
    var n1 = document.getElementById('navHome');
    var n2 = document.getElementById('navBio');
    var n3 = document.getElementById('navContact');
    var n4 = document.getElementById('navFollow');
    var n5 = document.getElementById('navArtistry');
    var n6 = document.getElementById('navLikes');
    if (argDiv === "HOME"){
        s1.style.display = 'block';
        s2.style.display = 'none';
        s3.style.display = 'none';
        s4.style.display = 'none';
        s5.style.display = 'none';
        s6.style.display = 'none';
        n1.classList.add('navHighlight');
        n1.classList.remove('navNormal');
        n2.classList.add('navNormal');
        n2.classList.remove('navHighlight');
        n3.classList.add('navNormal');
        n3.classList.remove('navHighlight');
        n4.classList.add('navNormal');
        n4.classList.remove('navHighlight');
        n5.classList.add('navNormal');
        n5.classList.remove('navHighlight');
        n6.classList.add('navNormal');
        n6.classList.remove('navHighlight');
    }
    else if (argDiv === "BIO"){
        s1.style.display = 'none';
        s2.style.display = 'block';
        s3.style.display = 'none';
        s4.style.display = 'none';
        s5.style.display = 'none';
        s6.style.display = 'none';
        n1.classList.add('navNormal');
        n1.classList.remove('navHighlight');
        n2.classList.add('navHighlight');
        n2.classList.remove('navNormal');
        n3.classList.add('navNormal');
        n3.classList.remove('navHighlight');
        n4.classList.add('navNormal');
        n4.classList.remove('navHighlight');
        n5.classList.add('navNormal');
        n5.classList.remove('navHighlight');
        n6.classList.add('navNormal');
        n6.classList.remove('navHighlight');
    }
    else if (argDiv === "CONTACT"){
        s1.style.display = 'none';
        s2.style.display = 'none';
        s3.style.display = 'block';
        s4.style.display = 'none';
        s5.style.display = 'none';
        s6.style.display = 'none';
        n1.classList.add('navNormal');
        n1.classList.remove('navHighlight');
        n2.classList.add('navNormal');
        n2.classList.remove('navHighlight');
        n3.classList.add('navHighlight');
        n3.classList.remove('navNormal');
        n4.classList.add('navNormal');
        n4.classList.remove('navHighlight');
        n5.classList.add('navNormal');
        n5.classList.remove('navHighlight');
        n6.classList.add('navNormal');
        n6.classList.remove('navHighlight');
    }
    else if (argDiv === "FOLLOW"){
        s1.style.display = 'none';
        s2.style.display = 'none';
        s3.style.display = 'none';
        s4.style.display = 'block';
        s5.style.display = 'none';
        s6.style.display = 'none';
        n1.classList.add('navNormal');
        n1.classList.remove('navHighlight');
        n2.classList.add('navNormal');
        n2.classList.remove('navHighlight');
        n3.classList.add('navNormal');
        n3.classList.remove('navHighlight');
        n4.classList.add('navHighlight');
        n4.classList.remove('navNormal');
        n5.classList.add('navNormal');
        n5.classList.remove('navHighlight');
        n6.classList.add('navNormal');
        n6.classList.remove('navHighlight');
    }
    else if (argDiv === "ARTISTRY"){
        s1.style.display = 'none';
        s2.style.display = 'none';
        s3.style.display = 'none';
        s4.style.display = 'none';
        s5.style.display = 'block';
        s6.style.display = 'none';
        n1.classList.add('navNormal');
        n1.classList.remove('navHighlight');
        n2.classList.add('navNormal');
        n2.classList.remove('navHighlight');
        n3.classList.add('navNormal');
        n3.classList.remove('navHighlight');
        n4.classList.add('navNormal');
        n4.classList.remove('navHighlight');
        n5.classList.add('navHighlight');
        n5.classList.remove('navNormal');
        n6.classList.add('navNormal');
        n6.classList.remove('navHighlight');
    }
    else if (argDiv === "LIKES"){
        s1.style.display = 'none';
        s2.style.display = 'none';
        s3.style.display = 'none';
        s4.style.display = 'none';
        s5.style.display = 'none';
        s6.style.display = 'block';
        n1.classList.add('navNormal');
        n1.classList.remove('navHighlight');
        n2.classList.add('navNormal');
        n2.classList.remove('navHighlight');
        n3.classList.add('navNormal');
        n3.classList.remove('navHighlight');
        n4.classList.add('navNormal');
        n4.classList.remove('navHighlight');
        n5.classList.add('navNormal');
        n5.classList.remove('navHighlight');
        n6.classList.add('navHighlight');
        n6.classList.remove('navNormal');
    }
}
function fnChangeClass(argID) {
    var x = document.getElementById(argID);
    if(x.classList.contains('navHighlight')){
        x.classList.add('navNormal');
        x.classList.remove('navHighlight');
    }
    else if(x.classList.contains('navNormal')){
        x.classList.add('navHighlight');
        x.classList.remove('navNormal');
    }
}
