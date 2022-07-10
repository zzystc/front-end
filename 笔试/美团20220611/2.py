import bisect

T = int(input())
# 每一位都相同，二分就可以了

valid = []


def calc(x, base):
    if x <= 100000:
        valid.append(x)
        calc(x * 16 + base, base)


for base in range(1, 16):
    calc(base, base)

valid.sort()

ns = list(map(int, input().split()))
ans = []
for n in ns:
    ans.append(bisect.bisect_left(valid, n + 1))

print(' '.join(map(str, ans)))
