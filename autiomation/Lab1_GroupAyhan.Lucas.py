length = input('Enter the length of the password: ')
letters = input('Enter the number of letters desired in password: ')
digits = input('Enter the numbers of digits desired in the password: ')
special = input('Enter the numbers of special characters desired in the password: ')

def validate_password(length, letters, digits, special):
    if length < 8:
         print('Please enter value of greater or equal to 8 to create a secure password')
    elif letters < 0 or letters > 9:
         print('The number of letters should be in range of 0 and 9')
    elif digits < 0 or digits > 6:
         print('The number of Digits should be in range of 0 and 6')
    elif special < 0 or special > 2:
         print('The number of special characters should be in range of 0 and 2')
    else:
         print('Valid inputs')
