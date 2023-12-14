def sum_up_diagonals(matrix):
    """Given a matrix [square list of lists], return sum of diagonals.

    Sum of TL-to-BR diagonal along with BL-to-TR diagonal:

        >>> m1 = [
        ...     [1,   2],
        ...     [30, 40],
        ... ]
        >>> sum_up_diagonals(m1)
        73

        >>> m2 = [
        ...    [1, 2, 3],
        ...    [4, 5, 6],
        ...    [7, 8, 9],
        ... ]
        >>> sum_up_diagonals(m2)
        30
    """
    # Get the size of the matrix (assuming it's a square matrix)
    size = len(matrix)

    # Sum the TL-to-BR diagonal elements
    tl_to_br_sum = sum(matrix[i][i] for i in range(size))

    # Sum the BL-to-TR diagonal elements
    bl_to_tr_sum = sum(matrix[i][size - 1 - i] for i in range(size))

    # Return the sum of both diagonals
    return tl_to_br_sum + bl_to_tr_sum