const skills = [
    {
      id: 3226,
      skill: 'Front End Development',
      genre: 'American',
      address: '5 Pine St, Toronto',
      price: '$'
    },
    {
      id: 5475,
      skill: 'Back End Development',
      genre: 'Japanese',
      address: '11 Maple Blvd, Toronto',
      price: '$$$'
    },
    {
      id: 9567,
      skill: 'Dev Ops',
      genre: 'Italian',
      address: '43 Elm Ave, Toronto',
      price: '$$$'
    },
    {
      id: 777,
      skill: "Data Analyst",
      genre: 'Religious American',
      address: '212 Adelaide St W, Toronto',
      price: '$$'
    }
];

const getAll = () => {
    return skills;
};

const getOne = (id) => {
    id = Number(id);
    return skills.find((s) => s.id === id);
};

module.exports = {
    getAll,
    getOne   
}
