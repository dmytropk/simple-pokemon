var repository = [
    {name: 'Rick Sanchez', age: 70, job: ['scientist', ' inventor']},
    {name: 'Morty Smith', age: 14, job: ['student at Harry Herpson High School', ' Rick\u0027s helping hand']},
    {name: 'Jerry Smith', age: 35, job: ['advertising agent (fired)', ' unknown assigned Galactic Federation employment (laid off after Federation collapse)', ' unemployed']}
];

for (var i = 0; i < repository.length; i++) {
    if (repository[i].age == 70) {
        document.write('<p>' + repository[i].name + ' (age: ' + repository[i].age + ') ' + repository[i].job + ' &#x2012Wow! Old, but cool!');
    } else {
        document.write('<p>' + repository[i].name + ' (age: ' + repository[i].age + ') ' + repository[i].job);

    }
}

