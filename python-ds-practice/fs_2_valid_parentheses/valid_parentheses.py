def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """

    # Initialize a stack to keep track of opening parentheses
    stack = []

    # Dictionary to store the mapping of opening to closing parentheses
    mapping = {')': '(', '}': '{', ']': '['}

    # Iterate through each character in the input parentheses string
    for char in parens:
        # If the character is a closing parenthesis
        if char in mapping:
            # Pop the top element from the stack if it is not empty; otherwise, assign a dummy value
            top_element = stack.pop() if stack else '#'

            # Check if the popped element matches the corresponding opening parenthesis
            if mapping[char] != top_element:
                return False
        else:
            # If it is an opening parenthesis, push it onto the stack
            stack.append(char)

    # If the stack is empty, all parentheses are balanced
    return not stack