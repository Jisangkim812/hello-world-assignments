#Welcome to hogwart!
import random
import sys

print ("Where am I going to..?")
print ("""
       
        (
     '( '
    "'  //}
   ( ''"
   _||__ ____ ____ ____
  (o)___)}___}}___}}___}
  'U'0 0  0 0  0 0  0 0  

""")
input("press enter >")


print ("Welcome to Hogwart!")
print("""
 
        /      \                         
       |        |
       |:/-\\--\.
        ( )-( )/,
         | ,  .
        / \- /. \
       | ||L  / \ \
      / /  \/    | *
     / /          \  \
     | |      []   |\ |
    /| |           ||  |
    || |           ||  |
    |  |           ||  |
    /_ |__________|||  |
   /_ \| ---------||   |
   /_ / |         ||   |
  /  | ||         | |     
  \//  ||         | |  |
  /  | ||    T    | |  |
 /   | ||    |     |
/  

""")
print("Omg. Is he 'Harry Potter?'")
input("press enter >")


def answer(house):
    if house == "Gryffindor":
        print("You belong in Gryffindor! 🦁 (Lion)")
        print("""
          
   .~ ~ ~.
 (  o,,,o  )
(   ). .(   )
 \  { v }  /
   ~ `v' ~

        """)
    elif house == "Hufflepuff":
        print("You belong in Hufflepuff! 🦡 (Badger)")
        print("""

            _.--.
    .'   ` '
     ``'.  .'     .c-..
        `.  ``````  .-'
       -'`. )--. .'`
       `-`._   \_`-- 

        """)
    elif house == "Ravenclaw":
        print("You belong in Ravenclaw! 🦅 (Eagle")
        print ("""
        ____     _____
       /  \  _.-'_.-'
       \  _\/   _/
     ___)/   __<
    <'-;:\_  _\
        '; \_\
         >/-,\
          |_\  

        """)
    elif house == "Slytherin":
        print("You belong in Slytherin! 🐍 (Snake)")
        print("""
        
            / . .\
            \  ---<
             \  /
   __________/ /
-=:___________/

""")

def question1():
    while True:
    
        print("You would be most hurt if a person called you...")
        print("1. Weak")
        print("2. Ignorant")
        print("3. Unkind")
        print("4. Boring")
        print("\n")
        choice1 = input("Choose a number")
        if choice1 in ["1", "2", "3", "4"]:
            return choice1
        else:
            print("Enter a valid number\n")

def question2():
    while True:
        print("The first Quidditch match of the season is approaching, and you can't wait to get involved. What role are you playing?")
        print("1. Seeker. I want the glory!")
        print("2. Chaser. I like to be involved, and work as part of the team.")
        print("3. Beater. I like having all that power.")
        print("4. I'll be in the crowd, making sure supporter morale is high!")
        print("\n")
        choice2 = input("Choose a number")
        if choice2 in ["1", "2", "3", "4"]:
            return choice2
        else:
            print("Enter a valid number\n")

def question3():
    while True:
        print("It's your fifth year at Hogwarts, and you've just received a Howler from your parents. What for?")
        print("1. Expelliarmus!")
        print("2. Protego!")
        print("3. Stupefy!")
        print("4. Crucio!")
        print("\n")
        choice2 = input("Choose a number")
        if choice2 in ["1", "2", "3", "4"]:
            return choice2
        else:
            print("Enter a valid number\n")

def question4():
    while True:
        print("And lastly, because it does matter: what house do YOU want to be sorted into?")
        print("1. Ravenclaw")
        print("2. Gryffindor")
        print("3. Slytherin")
        print("4. Hufflepuff")
        print("\n")
        choice2 = input("Choose a number")
        if choice2 in ["1", "2", "3", "4"]:
            return choice2
        else:
            print("Enter a valid number\n")

name = input("Hi, there. I'm Harry Potter. Welcome to Hogwart! What's your name? >>> ")

print("\n")
print(f"Hello, {name}! Let's find out which Hogwarts house you belong to.")
input("press enter >")
print("\n")

choice1 = question1()
choice2 = question2()
choice3 = question3()
choice4 = question4()

if choice1 == "1" and (choice2 == "3" and choice3 == "3" or choice4 == "3"):
    answer("Slytherin")
elif choice1 == "2" and (choice2 == "2" or choice3 == "1" or choice4 == "1"):
    answer("Ravenclaw")
elif choice1 == "3" and (choice2 == "4" or choice3 == "4"or choice4 == "4"):
    answer("Hufflepuff")
else: 
    answer("Gryffindor")
 