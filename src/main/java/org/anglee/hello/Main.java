package org.anglee.hello;

import com.google.inject.*;
import org.anglee.hello.module.A;
import org.anglee.hello.module.AFactory;
import org.anglee.hello.module.Ai;
import org.anglee.hello.module.B;
import org.anglee.hello.module.Bi;
import org.anglee.hello.module.C;
import org.anglee.hello.module.D;
import org.anglee.hello.module.E;
import org.anglee.hello.module.Ei;
import org.anglee.hello.module.FirstModule;

class Main {

  public static void main (String[] args) {
    Injector injector = Guice.createInjector(new FirstModule());
    System.out.println(injector);

    // A is not a singleton class, B is
    // A's constructor is called each time get instance of A.class
    // B's constructor is only called the first time
    Ai a = injector.getInstance(A.class);
    System.out.println(a.getInfo());
    
    // for AssistedInject, check out
    // http://google-guice.googlecode.com/svn/trunk/javadoc/com/google/inject/assistedinject/FactoryModuleBuilder.html
    AFactory afact = injector.getInstance(AFactory.class);
    A aa = afact.create("TEST");
    System.out.println(aa.getInfo());
    
    Bi b = injector.getInstance(B.class);
    System.out.println(b.getInfo());

    C c = injector.getInstance(C.class);
    c.printInfo();
    
    D d = injector.getInstance(D.class);
    d.printInfo();
    
    Ei e = injector.getInstance(Ei.class);
    System.out.println(e.getInfo());
  }
}
