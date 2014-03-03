package org.anglee.hello;

import com.google.inject.*;
import org.anglee.hello.module.C;
import org.anglee.hello.module.FirstModule;

class Main {
  public static void main (String[] args) {
    Injector injector = Guice.createInjector(new FirstModule());
    System.out.println(injector);
    C c = injector.getInstance(C.class);
    c.printInfo();
  }
}
