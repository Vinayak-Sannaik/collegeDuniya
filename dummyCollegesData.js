const collegeData = [
  {
    "Cd": 1,
    "name": "Indian Institute of Technology Bombay",
    "fees": "2,50,000",
    "placement": {
      "avg_package": "20,00,000",
      "highest_package": "50,00,000"
    },
    "rating": 8.9,
    "ranking": 3,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 2,
    "name": "Indian Institute of Technology Delhi",
    "fees": "3,00,000",
    "placement": {
      "avg_package": "18,00,000",
      "highest_package": "45,00,000"
    },
    "rating": 8.5,
    "ranking": 5,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 3,
    "name": "Indian Institute of Technology Madras",
    "fees": "2,80,000",
    "placement": {
      "avg_package": "22,50,000",
      "highest_package": "55,00,000"
    },
    "rating": 9.2,
    "ranking": 1,
    "collegeLogo": "logo.png",
    "featured": true
  },
  {
    "Cd": 4,
    "name": "Indian Institute of Technology Kanpur",
    "fees": "2,75,000",
    "placement": {
      "avg_package": "19,50,000",
      "highest_package": "48,00,000"
    },
    "rating": 8.7,
    "ranking": 2,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 5,
    "name": "Indian Institute of Technology Kharagpur",
    "fees": "2,60,000",
    "placement": {
      "avg_package": "21,00,000",
      "highest_package": "52,00,000"
    },
    "rating": 9.0,
    "ranking": 4,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 6,
    "name": "Indian Institute of Technology Roorkee",
    "fees": "3,20,000",
    "placement": {
      "avg_package": "17,50,000",
      "highest_package": "43,00,000"
    },
    "rating": 8.4,
    "ranking": 6,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 7,
    "name": "Birla Institute of Technology and Science, Pilani",
    "fees": "2,90,000",
    "placement": {
      "avg_package": "20,50,000",
      "highest_package": "49,00,000"
    },
    "rating": 8.8,
    "ranking": 3,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 8,
    "name": "KLS Gogate Institute of Technology, Belagavi",
    "fees": "3,10,000",
    "placement": {
      "avg_package": "18,50,000",
      "highest_package": "47,00,000"
    },
    "rating": 8.6,
    "ranking": 5,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 9,
    "name": "Rani Chennamma University, Bengaluru",
    "fees": "3,25,000",
    "placement": {
      "avg_package": "23,00,000",
      "highest_package": "56,00,000"
    },
    "rating": 9.1,
    "ranking": 1,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 10,
    "name": "Pune Institute of Computer Technology, Pune",
    "fees": "2,85,000",
    "placement": {
      "avg_package": "20,00,000",
      "highest_package": "50,00,000"
    },
    "rating": 8.9,
    "ranking": 2,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 11,
    "name": "Thapar Institute of Engineering and Technology, Patiala",
    "fees": "2,65,000",
    "placement": {
      "avg_package": "19,00,000",
      "highest_package": "46,00,000"
    },
    "rating": 8.7,
    "ranking": 4,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 12,
    "name": "Vellore Institute of Technology, Vellore",
    "fees": "3,15,000",
    "placement": {
      "avg_package": "22,00,000",
      "highest_package": "54,00,000"
    },
    "rating": 9.0,
    "ranking": 3,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 13,
    "name": "Visvesvaraya National Institute of Technology, Nagpur",
    "fees": "2,75,000",
    "placement": {
      "avg_package": "18,00,000",
      "highest_package": "45,00,000"
    },
    "rating": 8.5,
    "ranking": 5,
    "collegeLogo": "logo.png",
    "featured": true
  },
  {
    "Cd": 14,
    "name": "Government College of Engineering, Aurangabad",
    "fees": "3,05,000",
    "placement": {
      "avg_package": "21,50,000",
      "highest_package": "53,00,000"
    },
    "rating": 8.8,
    "ranking": 2,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 15,
    "name": "College of Engineering, Pune",
    "fees": "2,95,000",
    "placement": {
      "avg_package": "20,00,000",
      "highest_package": "50,00,000"
    },
    "rating": 9.1,
    "ranking": 1,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 16,
    "name": "Sardar Patel Institute of Technology, Mumbai",
    "fees": "2,70,000",
    "placement": {
      "avg_package": "19,50,000",
      "highest_package": "48,00,000"
    },
    "rating": 8.6,
    "ranking": 4,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 17,
    "name": "International Institute of Information Technology, Hyderabad",
    "fees": "3,20,000",
    "placement": {
      "avg_package": "22,00,000",
      "highest_package": "54,00,000"
    },
    "rating": 9.0,
    "ranking": 3,
    "collegeLogo": "logo.png",
    "featured": true
  },
  {
    "Cd": 18,
    "name": "Vishwakarma Institute of Technology, Pune",
    "fees": "2,90,000",
    "placement": {
      "avg_package": "20,50,000",
      "highest_package": "49,00,000"
    },
    "rating": 8.7,
    "ranking": 5,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 19,
    "name": "Manipal Institute of Technology, Manipal",
    "fees": "3,10,000",
    "placement": {
      "avg_package": "18,50,000",
      "highest_package": "47,00,000"
    },
    "rating": 8.8,
    "ranking": 2,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 20,
    "name": "PES University, Bengaluru",
    "fees": "3,25,000",
    "placement": {
      "avg_package": "23,00,000",
      "highest_package": "56,00,000"
    },
    "rating": 9.2,
    "ranking": 1,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 21,
    "name": "Netaji Subhas Institute of Technology, Delhi",
    "fees": "2,85,000",
    "placement": {
      "avg_package": "20,00,000",
      "highest_package": "50,00,000"
    },
    "rating": 8.9,
    "ranking": 4,
    "collegeLogo": "logo.png",
    "featured": true
  },
  {
    "Cd": 22,
    "name": "College of Engineering, Trivandrum",
    "fees": "3,15,000",
    "placement": {
      "avg_package": "22,50,000",
      "highest_package": "55,00,000"
    },
    "rating": 9.1,
    "ranking": 3,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 23,
    "name": "Veer Surendra Sai University of Technology, Burla",
    "fees": "2,95,000",
    "placement": {
      "avg_package": "21,00,000",
      "highest_package": "52,00,000"
    },
    "rating": 8.8,
    "ranking": 5,
    "collegeLogo": "logo.png",
    "featured": true
  },
  {
    "Cd": 24,
    "name": "Rajalakshmi Engineering College, Chennai",
    "fees": "2,70,000",
    "placement": {
      "avg_package": "19,00,000",
      "highest_package": "46,00,000"
    },
    "rating": 8.6,
    "ranking": 2,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 25,
    "name": "National Institute of Engineering, Mysuru",
    "fees": "3,20,000",
    "placement": {
      "avg_package": "22,00,000",
      "highest_package": "54,00,000"
    },
    "rating": 9.0,
    "ranking": 1,
    "collegeLogo": "logo.png",
    "featured": true
  },
  {
    "Cd": 26,
    "name": "Guru Nanak Dev Engineering College, Ludhiana",
    "fees": "2,90,000",
    "placement": {
      "avg_package": "20,50,000",
      "highest_package": "49,00,000"
    },
    "rating": 8.7,
    "ranking": 3,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 27,
    "name": "Ramaiah Institute of Technology, Bengaluru",
    "fees": "3,10,000",
    "placement": {
      "avg_package": "18,50,000",
      "highest_package": "47,00,000"
    },
    "rating": 8.8,
    "ranking": 5,
    "collegeLogo": "logo.png",
    "featured": true
  },
  {
    "Cd": 28,
    "name": "SASTRA Deemed University, Thanjavur",
    "fees": "2,85,000",
    "placement": {
      "avg_package": "20,00,000",
      "highest_package": "50,00,000"
    },
    "rating": 9.1,
    "ranking": 2,
    "collegeLogo": "logo.png",
    "featured": false
  },
  {
    "Cd": 29,
    "name": "National Institute of Technology, Kurukshetra",
    "fees": "3,15,000",
    "placement": {
      "avg_package": "22,50,000",
      "highest_package": "55,00,000"
    },
    "rating": 9.2,
    "ranking": 1,
    "collegeLogo": "logo.png",
    "featured": true
  },
  {
    "Cd": 30,
    "name": "Thiagarajar College of Engineering, Madurai",
    "fees": "2,95,000",
    "placement": {
      "avg_package": "21,00,000",
      "highest_package": "52,00,000"
    },
    "rating": 8.8,
    "ranking": 4,
    "collegeLogo": "logo.png",
    "featured": false
  }
]

export default collegeData;
