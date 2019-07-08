package Src.FactoryPattern;

/**
 * Created by an4d2ea on 7/26/16.
 */
public class ColorFactory {

    public static Color makeColor(Boolean isPrimary, String name) {
        Color newColor;

        if(isPrimary) {
             newColor = new Src.FactoryPattern.PrimaryColor(name);
        }
        else {
             newColor = new Src.FactoryPattern.PrimaryColor(name);
        }
        return newColor;
    }
}
