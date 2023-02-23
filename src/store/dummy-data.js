const dummyData = [
  {
    id: "i1",
    title: "Golden Retriever",
    dogId:'golden',
    style: "medieval",
    description: "A photo of a golden ",
    liked: false,
    price: 10,
    quantity:0
  },
  {
    id: "i2",
    title: "Beagle",
    dogId:'beagle',
    style: "medieval",
    description: "Baron of the Hunt",
    liked: false,
    price: 12,
    quantity:0
  },
  {
    id:'i3',
    title: "French Bulldog",
    dogId:'french',
    style: "medieval",
    description: "A photo of a french bulldog",
    liked:false,
    price: 15,
    quantity:0
  },
  {
    id:'i4',
    title: "Berna Hound",
    dogId:'berna',
    style: "medieval",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i5',
    title: "Samoyed",
    dogId:'samoyed',
    style: "medieval",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i6',
    title: "Husky",
    dogId:'husky',
    style: "medieval",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i7',
    title: "Australian Sheppard",
    dogId:'australian',
    style: "medieval",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i8',
    title: "German Shepperd",
    dogId:'german',
    style: "medieval",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  // cyber punk
  {
    id: "i9",
    title: "Golden Retriever",
    dogId:'golden',
    style: "cyberpunk",
    description: "A photo of a golden ",
    liked: false,
    price: 10,
    quantity:0
  },
  {
    id: "i10",
    title: "Beagle",
    dogId:'beagle',
    style: "cyberpunk",
    description: "A photo of a beagle",
    liked: false,
    price: 12,
    quantity:0
  },
  {
    id:'i11',
    title: "French Bulldog",
    dogId:'french',
    style: "cyberpunk",
    description: "A photo of a french bulldog",
    liked:false,
    price: 15,
    quantity:0
  },
  {
    id:'i12',
    title: "Berna Hound",
    dogId:'berna',
    style: "cyberpunk",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i13',
    title: "Samoyed",
    dogId:'samoyed',
    style: "cyberpunk",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i14',
    title: "Husky",
    dogId:'husky',
    style: "cyberpunk",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i15',
    title: "Australian Sheppard",
    dogId:'australian',
    style: "cyberpunk",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i16',
    title: "German Shepperd",
    dogId:'german',
    style: "cyberpunk",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  // modern
  {
    id: "i17",
    title: "Golden Retriever",
    dogId:'golden',
    style: "modern",
    description: "A photo of a golden ",
    liked: false,
    price: 10,
    quantity:0
  },
  {
    id: "i18",
    title: "Beagle",
    dogId:'beagle',
    style: "modern",
    description: "A photo of a beagle",
    liked: false,
    price: 12,
    quantity:0
  },
  {
    id:'i19',
    title: "French Bulldog",
    dogId:'french',
    style: "modern",
    description: "A photo of a french bulldog",
    liked:false,
    price: 15,
    quantity:0
  },
  {
    id:'i20',
    title: "Berna Hound",
    dogId:'berna',
    style: "modern",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i21',
    title: "Samoyed",
    dogId:'samoyed',
    style: "modern",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i22',
    title: "Husky",
    dogId:'husky',
    style: "modern",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i23',
    title: "Australian Sheppard",
    dogId:'australian',
    style: "modern",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i24',
    title: "German Shepperd",
    dogId:'german',
    style: "modern",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  // stars
  {
    id: "i25",
    title: "Golden Retriever",
    dogId:'golden',
    style: "stars",
    description: "A photo of a golden ",
    liked: false,
    price: 10,
    quantity:0
  },
  {
    id: "i26",
    title: "Beagle",
    dogId:'beagle',
    style: "stars",
    description: "A photo of a beagle",
    liked: false,
    price: 12,
    quantity:0
  },
  {
    id:'i27',
    title: "French Bulldog",
    dogId:'french',
    style: "stars",
    description: "A photo of a french bulldog",
    liked:false,
    price: 15,
    quantity:0
  },
  {
    id:'i28',
    title: "Berna Hound",
    dogId:'berna',
    style: "stars",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i29',
    title: "Samoyed",
    dogId:'samoyed',
    style: "stars",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i30',
    title: "Husky",
    dogId:'husky',
    style: "stars",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i31',
    title: "Australian Sheppard",
    dogId:'australian',
    style: "stars",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  {
    id:'i32',
    title: "German Shepperd",
    dogId:'german',
    style: "stars",
    description: "A photo of a bernese dog",
    liked:false,
    price: 10,
    quantity:0
  },
  
];

export default dummyData;
