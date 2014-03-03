package org.anglee.hello.module;

import com.google.inject.Inject;
import java.util.Date;

/**
 *
 */
public class D {
  @Inject private AFactory afact;
  
  public D() {
    System.out.println("constructing D");
  }
  public void printInfo() {
    A a = afact.create(new Date());
    System.out.println(a.getInfo());
  }
}
