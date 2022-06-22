def 
print_in_a_frame(*words):
    size = max(len(word) forword in words)
    print('*' * (size + 4))
    forword in words:
        print('* {:<{}} *'.format(word, size))
    print('*' * (size + 4))

>>> print_in_a_frame("Hello", "World", "in", "a", "frame")

