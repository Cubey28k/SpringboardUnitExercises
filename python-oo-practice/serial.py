"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    class serial:
        def __init__(self, value):
            self.value = value
            
    def __init__(self, start = 0):
        self.start = start
        self.current = start

    def generate(self):
        result = self.current
        self.current += 1
        return result
    
    def reset(self):
        self.current = self.start

