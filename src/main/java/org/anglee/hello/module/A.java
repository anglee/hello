package org.anglee.hello.module;

import com.google.inject.Inject;
import com.google.inject.assistedinject.Assisted;
import com.google.inject.assistedinject.AssistedInject;
import java.util.Date;

/**
 *
 */
public class A implements Ai {
  private final String _postfix;
  @Inject
  A() {
    _postfix = "NONE";
    System.out.println("constructing A()");
  }
  
  @AssistedInject
  A(@Assisted String postfix) {
    _postfix = postfix;
    System.out.println("constructing A(String)");
  }
  
  @AssistedInject
  A(@Assisted Date postfix) {
    _postfix = postfix.toString();
    System.out.println("constructing A(Date)");
  }  
  
  @Override
  public String getInfo() {
    return "A - " + _postfix;
  }
}
