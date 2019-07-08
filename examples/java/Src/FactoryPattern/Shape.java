package Src.FactoryPattern;

public abstract class Shape {

    protected final String name;
    protected Color color;

    public Shape(String name) {
        this.name = name;
    }

    public void setColor(Color color){
        this.color = color;
    }
    public Color getColor(){
        return this.color;
    }
}