function verb(){
    let verbs = ['run', 'jump','swim', 'hike', 'build', 'think', 'throw', 'smell', 'walk', 'complain', 'clean', 'drink', 'hide', 'sit']
    let randNum = Math.floor(Math.random() * verbs.length)
    return verbs[randNum]
}

function noun(){
    let nouns = ['grass', 'pig','boat', 'snake', 'lumber', 'goat', 'tree', 'parrot', 'snow', 'sand', 'bag', 'table', 'LASER', 'computer', 'bed', 'burger', 'car', 'drill', 'battery']
    let randNum = Math.floor(Math.random() * nouns.length)
    return nouns[randNum]
}

function adjective(){
    let adjectives = ['hot', 'cold', 'cool', 'fat', 'ambitious', 'flabby', 'polite', 'pitiful', 'helpless', 'massive', 'puny', 'scrawny', 'tiny', 'unsightly', 'clumsy', 'angry', 'dark']
    let randNum = Math.floor(Math.random() * adjectives.length)
    return adjectives[randNum]
}

function occupation(){
    let occupations = ['accountant', 'nurse', 'lawyer', 'farmer', 'programmer', 'teacher', 'architect', 'florist', 'gladiator', 'engineer', 'poacher', 'pilot', 'news anchor']
    let randNum = Math.floor(Math.random() * occupations.length)
    return occupations[randNum]
}


function story(){
    let story = `Today a ${occupation()} named ${noun()} came to our school to talk to us about her job.
    She said the most important skill you need to know to do her job is to be able to ${verb()} around (a) ${adjective()} ${noun()}.
    She said it was easy for her to learn her job because she loved to ${verb()} when she was my age-and that help a lot!
    If you're considering her profession, I hope you can be near (a) ${adjective()} ${noun()}. That's very important!
    If you get distracted in that situation you won't be able to ${verb()} next to (a) ${noun()}!`

    return story
}

console.log(story())