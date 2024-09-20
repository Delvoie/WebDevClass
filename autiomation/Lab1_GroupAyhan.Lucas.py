length = input('Enter the length of the password: ')
letters = input('Enter the number of letters desired in password: ')
digits = input('Enter the numbers of digits desired in the password: ')
special = input('Enter the numbers of special characters desired in the password: ')

def validate_input(length, letters, digits, special):
    if length < 8:
        return 'Please enter value of greater or equal to 8 to create a secure password'
    if letters < 0 or letters > 9:
        return 'The number of letters should be in range of 0 and 9'
    if digits < 0 or digits > 6:
        return 'The number of Digits should be in range of 0 and 6'
    if special < 0 or special > 2:
        return 'The number of special characters should be in range of 0 and 2'
    return 'Valid inputs'
