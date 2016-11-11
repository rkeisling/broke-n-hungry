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
          'Crunchy Taco': {
            'Beef': [25],
            'Chicken': [25]
          }
        },
        "Burritos": {
          "Bean Burrito": [25],
          'Chicken Burrito': [25],
          'Beefy Nacho Burrito': [25],
          'Loaded Potato Griller': [25]
        },
        'Other': {
          'Nachos Supreme': [25],
          'Mexican Pizza': [25],
          'Quesadilla': [25]
        }
      },
      "Sides": {
        "Chips & Cheese": [25],
        "Chips & Pico de Gallo": [25],
        "Chips & Guacamole": [25],
        'Chips & Salsa': [25],
        'Doritos': [25]
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
        'Freezes': {
          'Airheads White Freeze': {
            'Small': [25],
            'Medium': [25],
            'Large': [25]
          },
          'Starburst Freeze': {
            'Small': [25],
            'Medium': [25],
            'Large': [25]
          },
          'Baja Blast': {
            'Small': [25],
            'Medium': [25],
            'Large': [25]
          }
        },
        'Other': {
          'Cinnabon Delights': [25],
          'Cinnamon Twist': [25],
          'Caramel Apple Empanada': [25]
        }
      }
    },
    "Sonic": {
      "Main": {
        "Beef": {
          'Burgers': {
            'Jr. Burger': [25],
            'Jr. Deluxe Burger': [25],
            'Jr. Double Burger': [25]
          },
          'Hotdogs': {
            'Chilli Cheese Coney': [25],
            'Corndog': [25]
          }
        },
        "Chicken": {
          "Chicken Strip Sandwich": [25],
          'Chicken Strips': [25],
          'Boneless Wings': [25]
        }
      },
      "Sides": {
        "Tots": {
          'Regular': [25],
          'Chilli Cheese': [25]
        },
        "Fries": {
          'Regular': [25],
          'Chilli Cheese': [25]
        },
        "Mozzarella Sticks": [25],
        'Onion Rings': [25]
      },
      "Drinks": {
        "Fountain Drink": {
          'Small': [25],
          'Medium': [25],
          'Large': [25],
          'Route 44': [25]
        },
        "Tea": {
          'Small': [25],
          'Medium': [25],
          'Large': [25],
          'Route 44': [25]
        },
        "Other": {
          'Limeade': [25],
          'Water': [25]
        }
      },
      "Deserts": {
        'Shakes': {
          'Small': [25],
          'Medium': [25],
          'Large': [25]
        },
        'Blasts': {
          'Small': [25],
          'Medium': [25],
          'Large': [25]
        },
        'Other': {
          'Molten Cake': [25],
          'Hot Fudge Sundae': [25]
        }
      }
    }
  }
};
