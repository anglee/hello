package org.anglee.hello.module;

import com.google.inject.Singleton;

/**
 *
 */
@Singleton
public class B implements Bi {
  B() {
    System.out.println("constructing B");
  }
  
  @Override
  public String getInfo() {
    return "B";
  }
}