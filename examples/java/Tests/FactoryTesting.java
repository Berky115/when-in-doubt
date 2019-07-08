package Tests;

import org.junit.Assert;
import org.junit.Test;
import Src.FactoryPattern.Circle;
import Src.FactoryPattern.Factory;
import Src.FactoryPattern.Square;


public class FactoryTesting {

    @Test
    public void shapeByCorners()
    {
        Assert.assertEquals(Circle.class,Factory.makeShape(0, "A magic circle").getClass());
        Assert.assertEquals(Square.class,Factory.makeShape(4, "A simple square").getClass());
    }
}
