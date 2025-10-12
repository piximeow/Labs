const phonebook = [
    {name: 'Painbow Dash', phone: '+380777777777'},
    {name: 'Fluttershy', phone: '+380555555555'},
    {name: 'Applejack', phone: '+380333333333'},
];

const findPhoneByName = (name) => {
    for (const contact of phonebook) {
        if (contact.name == name) {
            return contact.phone;
        }
    } 
};

console.log(findPhoneByName('Fluttershy'));


const phonebook2 = {
    'Rainbow Dash': '+380777777777',
    'Fluttershy': '+380555555555',
    'Applejack': '+380333333333'
};

const findPhoneByName2 = (name) => {
    return phonebook2[name]
};

console.log(findPhoneByName2('Rainbow Dash'));
