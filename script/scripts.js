

console.log(window.location.pathname)
console.log(top.location.pathname)
console.log(window.location.href)

// if on the home page:
if (window.location.pathname === "/sponsor-myanmar-refugees")
{
    var photos = document.getElementById('photos');

    $(document).ready(function() {
        for (var i = 0; i < 74; i++)
        {
            // create an image element and set it's source
            var image = new Image(150);
            image.src = `images/kids/${i}.jpg`;

            // construct the personal information for each child
            var content = `<h5> ${data[i]['name']} </h5>
            <div> Age: ${data[i]['age']} <span></span> Grade: ${data[i]['grade']}</div>
            <div class="${data[i]['status']}"> ${data[i]['status']} </div>
            <div> Story: ${data[i]['story']} </div>`;
            if (data[i]['siblings'])
            {
                content += `<div>Siblings: ${data[i]['siblings']}</div>`;
            }

            var div = document.createElement('div');
            div.classList.add('personalInfo');
            div.innerHTML = content;

            var figure = document.createElement('figure');
            figure.classList.add('col-6', 'col-sm-4', 'col-md-3', 'col-xl-2');
            var figcaption = document.createElement('figcaption');
            figcaption.appendChild(div);


            photos.appendChild(figure);
            figure.appendChild(image);
            figure.appendChild(figcaption);

        }
    });
}










var data = [
     {
       id: 0, name: "Char Li", age: 13, grade: 8, status: "unsponsored",
       story: "She lost her father and her home was damaged by bombs...She was with her mother in the refugee camp. She is now in the home."
     }, {
       id: 1, name: "Cha Li Dwet", age: 14, grade: 8, status: "unsponsored",
       story: "?"
     }, {
       id: 2, name: " San San Aye", age: 13, grade: 7, status: "unsponsored",
       story: "She has both parents but lost all family property in wars so they lived in refugee camp.  Now she came home."
     }, {
       id: 3, name: "Dar Le Wo", age: 9, grade: 4, status: "unsponsored",
       story: "He has parents. Because of wars, they left everything behind and lived in the camp...the boy came home."
     }, {
       id: 4, name: "Jor Sar Wo", age: 0, grade: 0, status: "unsponsored",
       story: "Both parents are druggers and he has no hope and peace in home. The war made them hopeless and running away.  Now the family is in the camp but the boy came home"
     }, {
       id: 5, name: "B Sar", age: 9, grade: 5, status: "unsponsored",
       story: "Her parents are homeless people. No land and home to belong to the family. Now they stay in refugee camp."
     }, {
       id: 6, name: "Yaw Aye Mee", age: 13, grade: 8, status: "unsponsored",
       story: "She was living with her grandmother. When she was 2 years old her parents left her..they had no more contacts with her and she stayed in the refugee camp."
     }, {
       id: 7, name: "Ngwa Li Du", age: 13, grade: 8, status: "unsponsored",
       story: "Father lost in wars..and she is with her mom  ..very poor. Now staying in refugees camp."
     }, {
       id: 8, name: "Du Du Lay", age: 12, grade: 7, status: "unsponsored",
       story: "She has parents but very poor...now even their home was damaged by bombs in wars. Staying in refugees camp."
     }, {
       id: 9, name: " J Chit Oo", age: 8, grade: 3, status: "unsponsored",
       story: "He grew up in wars...running always..place to place. He lost parents. He has been hurt a lot by wars...emotionally..He said when I grow up..I will fight back those people who killed my parents as revenge!"
     }, {
       id: 10, name: "Ah phu kyaw", age: 14, grade: 9, status: "unsponsored",
       story: "Both parents are dealers of drugs...hopeless conditions..depression due to wars...he staying in refugees camp. He is needing help for education and stay safety home."
     }, {
       id: 11, name: "Je Jaime", age: 13, grade: 8, status: "unsponsored",
       story: "He lost his father in wars..the family stays in refugee camp. They have three others kids. 3 siblings: twin brothers and little sister"
     }, {
       id: 12, name: "Jay Si Pha", age: 12, grade: 7, status: "unsponsored",
       story: "He is an orphan..lived with grandmother who is too old...now staying in refugees camp."
     }, {
       id: 13, name: "Myo kyaw san", age: 0, grade: 0, status: "unsponsored",
       story: "Parents were killed by jungle army....they were left over...staying in refugees camp...under church cares.",
       siblings: "Myo kyaw ko, the next little girl"
     }, {
       id: 14, name: "Myo kyaw ko", age: 0, grade: 0, status: "unsponsored",
       story: "Parents were killed by jungle army....they were left over...staying in refugees camp...under church cares.",
       siblings: "Myo kyaw san, the next little girl"
     }, {
       id: 15, name: "?", age: 0, grade: 0, status: "unsponsored",
       story: "Little girl is their sister, the only one they have. Parents are killed by jungle army....they were left over...staying in refugees camp...under church cares.",
       siblings: "Myo kyaw ko, Myo kyaw san"
     }, {
       id: 16, name: "Are Phuo Dor", age: 10, grade: 6, status: "unsponsored",
       story: "He and his younger sister are in the refugee camp.  Their parents both died in the wars, by bombs.",
       siblings: "Mee San"
     }, {
       id: 17, name: "Mee San", age: 8, grade: 4, status: "unsponsored",
       story: "She and her older brother are in the refugee camp.  Their parents have died in the war by bombs.",
       siblings: "Are Phuo Dor"
     }, {
       id: 18, name: "Yae Li Say", age: 6, grade: 2, status: "unsponsored",
       story: "refugee family...running for life free from wars... Father is drugs drinker or drugertice...so hopeless the boys life and future.",
       siblings: "Dee Li Say"
     }, {
       id: 19, name: "Dee Li Say", age: 8, grade: 4, status: "unsponsored",
       story: "refugee family...running for life free from wars... Father is drugs drinker or drugertice...so hopeless the boys life and future.",
       siblings: "Yae Li Say"
     }, {
       id: 20, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 21, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 22, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 23, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 24, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 25, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 26, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 27, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 28, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 29, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 30, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 31, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 32, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 33, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 34, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 35, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 36, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 37, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 38, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 39, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 40, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 41, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 42, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 43, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 44, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 45, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 46, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 47, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 48, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 49, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 50, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 51, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 52, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 53, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 54, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 55, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 56, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 57, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 58, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 59, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 60, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 61, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 62, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 63, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 64, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 65, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 66, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 67, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 68, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 69, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 70, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 71, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 72, name: "", age: 1, grade: 1, status: "unsponsored",
       story: ""
     }, {
       id: 73, name: "", age: 0, grade: 0, status: "unsponsored",
       story: ""
     }

]
