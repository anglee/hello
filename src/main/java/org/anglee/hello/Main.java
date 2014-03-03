package org.anglee.hello;

import com.google.inject.*;

class Main {
  public static void main (String[] args) {
    Injector injector = Guice.createInjector();
    System.out.println(injector);
  }
}
