package Tests;

import org.junit.Assert;
import org.junit.Test;

public class StringBufferTest {

    @Test
    public void BufferTest() {
        StringBuffer stringBuffer = new StringBuffer("FactoryTesting");
        stringBuffer.append(" String Buffer");
        Assert.assertEquals ("FactoryTesting String Buffer", stringBuffer.toString());
    }

    @Test
    public void insertTest() {
        StringBuffer stringBuffer = new StringBuffer("He");
        stringBuffer.insert(2,"llo");
        Assert.assertEquals ("Hello", stringBuffer.toString());
    }

}
