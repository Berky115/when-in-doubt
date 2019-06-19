'''
Run as:

python calculator.py double 10  # 20
python calculator.py double --number=15  # 30
'''

import fire

class Calculator(object):
  """A simple calculator class."""

  def double(self, number):
    return 2 * number

    # add 1 2  
    # add --num1=1 --num2=2
  def add(self, num1, num2):
    return num1 + num2


def main():
    fire.Fire(Calculator)

if __name__ == '__main__':
    main()