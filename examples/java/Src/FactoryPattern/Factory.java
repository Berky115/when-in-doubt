package Src.FactoryPattern;


public class Factory {

    public static Shape makeShape(int points, String name) {
        Shape shape = null;
        if (points == 0) {
            Circle circle = new Circle(name);
            shape = circle;
        }
        if (points == 4) {
            Src.FactoryPattern.Square square = new Src.FactoryPattern.Square(name);
            shape = square;
        }
        return shape;
    }

}
