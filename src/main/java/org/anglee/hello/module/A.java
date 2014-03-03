package org.anglee.hello.module;

/**
 *
 */
public class A implements Ai{
  A() {
    System.out.println("constructing A");
  }
  
  @Override
  public String getInfo() {
    return "A";
  }
}
