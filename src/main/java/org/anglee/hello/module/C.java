package org.anglee.hello.module;

import com.google.inject.Inject;

/**
 *
 */
public class C {
  private final Ai _a;
  private final Bi _b;
  
  @Inject
  C(Ai a, Bi b) {
    System.out.println("constructing C");
    this._a = a;
    this._b = b;
  }
  
  public void printInfo() {
    System.out.println("a = " + _a.getInfo());
    System.out.println("b = " + _b.getInfo());
  }
}
