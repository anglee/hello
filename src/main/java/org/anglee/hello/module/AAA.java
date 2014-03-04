package org.anglee.hello.module;

/**
 *
 */
public class AAA implements Ai{
  AAA() {
    System.out.println("constructing AAA");
  }

  @Override
  public String getInfo() {
    return "AAA";
  }
}
