from math import gcd

n = int(input())
arr = list(map(int, input().split()))

ans = arr[0]

for i in arr[1:]:
    ans = gcd(ans, i)
print(ans)