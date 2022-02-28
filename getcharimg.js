const genshindb = require('genshin-db');

imgs = genshindb.characters('kokomi', {resultLanguage:'JP'}).images

namelist = genshindb.characters('names', { matchCategories: true })

console.log(imgs)
