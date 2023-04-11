n = int(input())
num = 0
i = 0
while n != 0:
    rem = n % 10
    n //= 10
    num += rem * pow(2,i)
    i += 1
print(num)