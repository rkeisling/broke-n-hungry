var skillsdata;

skillsdata = {
  "Skills": {
    "McDonald's": {
      "Main": {
        "Chicken": {
          'Grilled Chicken Sandwich': [25],
          'McChicken': [25],
          'Chicken Nuggets': [25]
        },
        "Beef": {
          'McDouble': [25],
          'Big Mac': [25],
          'Quarter Pounder': [25],
          'Cheeseburger': [25],
          'Burger': [25]
        },
        "Other": {
          'Filet-O-Fish': [25],
          'Salad': [25]
        }
      },
      "Sides": {
        "Fries": {
          'Small': [25],
          'Medium': [25],
          'Large': [25]
        },
        "Side Salad": [50],
        "Apple Slices": [25]
      },
      "Drinks": {
        "Fountain Drink": {
          'Small': [25],
          'Medium': [25],
          'Large': [25]
        },
        "Tea": {
          'Small': [25],
          'Medium': [25],
          'Large': [25]
        },
        "Other": {
          'Bottled Water': [25],
          'Apple Juice': [25],
          'McCafe': [25],
          'Chocolate Milk': [25]
        }
      },
      "Deserts": {
        'McFlurry': [25],
        'Cookie': [25],
        'Vanilla Cone': [25],
        'Hot Fudge Sundae': [25],
        'Baked Apple Pie': [25]
      }
    },
    "Wendy's": {
      "Main": {
        "Chicken": {
          'Chicken Sandwich': {
            'Crispy': [25],
            'Spicy': [25],
            'Grilled': [25]
          },
          'Chicken Wrap': {
            'Grilled': [25],
            'Spicy': [25]
          },
          'Chicken Nuggets': {
            'Regular': [25],
            'Spicy': [25]
          }
        },
        "Beef": {
          "Dave's Burger": {
            'Single': [25],
            'Double': [25]
          },
          'Baconator': [25],
          'Son of Baconator': [25],
          'Cheeseburger': [25],
          'Hamburger': [25]
        }
      },
      "Sides": {
        "Fries": {
          'Small': [25],
          'Medium': [25],
          'Large': [25]
        },
        "Side Salad": {
          'Garden': [25],
          'Caesar': [25]
        },
        "Baked Potato": [25],
        'Chili': [25]
      },
      "Drinks": {
        "Fountain Drink": {
          'Small': [25],
          'Medium': [25],
          'Large': [25]
        },
        "Tea": {
          'Small': [25],
          'Medium': [25],
          'Large': [25]
        },
        "Other": {
          'Water': [25],
          'Coffee': [25]
        }
      },
      "Deserts": {
        'Frosty': {
          'Chocolate': {
            'Small': [25],
            'Medium': [25],
            'Large': [25]
          },
          'Vanilla': {
            'Small': [25],
            'Medium': [25],
            'Large': [25]
          }
        }
      }
    },
    "Taco Bell": {
      "Main": {
        "Tacos": {
          'Doritos Locos Taco': {
            'Nacho Cheese': [25],
            'Fiery': [25],
            'Cool Ranch': [25]
          },
          'Soft Taco': {
            'Grilled': [25],
            'Spicy': [25]
          },
          'Chicken Nuggets': {
            'Regular': [25],
            'Spicy': [25]
          }
        },
        "Beef": {
          "Dave's Burger": {
            'Single': [25],
            'Double': [25]
          },
          'Baconator': [25],
          'Son of Baconator': [25],
          'Cheeseburger': [25],
          'Hamburger': [25]
        }
      },
      "Sides": {
        "Fries": {
          'Small': [25],
          'Medium': [25],
          'Large': [25]
        },
        "Side Salad": {
          'Garden': [25],
          'Caesar': [25]
        },
        "Baked Potato": [25],
        'Chili': [25]
      },
      "Drinks": {
        "Fountain Drink": {
          'Small': [25],
          'Medium': [25],
          'Large': [25]
        },
        "Tea": {
          'Small': [25],
          'Medium': [25],
          'Large': [25]
        },
        "Other": {
          'Water': [25],
          'Coffee': [25]
        }
      },
      "Deserts": {
        'Frosty': {
          'Chocolate': {
            'Small': [25],
            'Medium': [25],
            'Large': [25]
          },
          'Vanilla': {
            'Small': [25],
            'Medium': [25],
            'Large': [25]
          }
        }
      }
    },
    "Taco Bell": {
      "HW&FW": {
        "Protues": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 25],
        "Keil": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 25],
        "Code Warrior": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 15, 15, 10, 10, 20],
        "Protel": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 15, 10, 10, 5],
        "Multisim": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 30, 25, 20, 15],
        "Lego": [0, 0, 0, 0, 10, 40, 50, 45, 40, 35, 30, 25, 20, 15, 10]
      },
      "Productivity": {
        "Vim": [0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 45, 50, 55],
        "AHK": [0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 30, 35, 40],
        "Office": [0, 10, 20, 50, 60, 60, 70, 70, 80, 90, 90, 90, 90, 90, 90],
        "Photoshop": [0, 10, 20, 30, 35, 40, 45, 50, 60, 65, 60, 60, 55, 60, 60],
        "Batch": [40, 45, 50, 50, 50, 60, 65, 70, 75, 75, 80, 80, 80, 80, 80],
        "Shell": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 30, 35, 40],
        "Linux": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 40, 50, 55],
        "Marked Text": [10, 20, 20, 30, 40, 40, 40, 40, 40, 50, 60, 70, 80, 80, 80]
      },
      "Project": {
        "Agile": [0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 40, 50, 60, 70, 80],
        "CI": [0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 70, 70, 80, 80],
        "Repos": {
          "Git": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 50],
          "SVN": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "Clearcase": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30]
        },
        "Track": {
          "Redmine": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30],
          "Trello": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 20]
        },
        "Wiki": [0, 0, 0, 0, 0, 0, 0, 0, 10, 40, 50, 40, 40, 40, 40],
        "Quality Assurance": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 60, 60]
      },
      "Cloud": {
        "IaaS": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 15],
        "PaaS": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 30, 30],
        "SaaS": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]
      },
      "Test": {
        "TDD": [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 5, 5, 15, 5, 5],
        "cucumber": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10, 30],
        "Load test": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 30, 25, 20, 15]
      }
    }
  }
};
