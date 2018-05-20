export default {
  identity: {
    firstname: 'Gaëtan',
    lastname: 'Calvet',
    username: 'gcalvet',
    td: 1,
    promotion: 2020
  },
  grades: [
    {
      semesterId: 1,
      name: 'S1',
      ues: [
        {
          id: 1,
          name: 'UE1',
          subjects: [
            {
              id: 1,
              name: 'Maths',
              assignments: [
                {
                  id: 1,
                  name: 'DM de maths',
                  description: 'Des probas',
                  coefficient: 1,
                  grade: 12
                },
                {
                  id: 3,
                  name: 'Partiel final',
                  description: 'Partiel final',
                  coefficient: 3,
                  grade: 15
                }
              ]
            },
            {
              id: 2,
              name: 'Signal',
              assignments: [
                {
                  id: 2,
                  name: 'Vitesse du son',
                  description: 'DM de M. Calvet',
                  coefficient: 2,
                  grade: 8
                }
              ]
            }
          ]
        },
        {
          id: 3,
          name: 'UE3',
          subjects: [
            {
              id: 3,
              name: 'Anglais',
              assignments: [
                {
                  id: 8,
                  name: 'Devoir partiel',
                  description: 'TOEIC',
                  coefficient: 2,
                  grade: 13
                }
              ]
            }
          ]
        }
      ]
    },
    {
      semesterId: 2,
      name: 'S2',
      ues: [
        {
          id: 5,
          name: 'UE5',
          subjects: [
            {
              id: 10,
              name: 'Synthèse de l\'image',
              assignments: [
                {
                  id: 17,
                  name: 'Imacman',
                  description: 'Faire un pacman en OpenGL3',
                  coefficient: 1,
                  grade: 18
                },
                {
                  id: 22,
                  name: 'Arkanopong',
                  description: 'Un arkanopong',
                  coefficient: 3,
                  grade: 16
                }
              ]
            },
          ]
        },
        {
          id: 6,
          name: 'UE6',
          subjects: [
            {
              id: 78,
              name: 'Arts',
              assignments: [
                {
                  id: 31,
                  name: 'Performance artistique',
                  description: 'Il faut faire une perforamnce, et la présenter',
                  coefficient: 2,
                  grade: 13
                }
              ]
            }
          ]
        },
        {
          id: 7,
          name: 'UE7',
          subjects: [
            {
              id: 45,
              name: 'Techniques',
              assignments: [
                {
                  id: 34,
                  name: 'Web',
                  description: 'Dashboard en React',
                  coefficient: 2,
                  grade: 15
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
