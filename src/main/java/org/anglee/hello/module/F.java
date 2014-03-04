package org.anglee.hello.module;

import com.google.inject.Inject;
import com.google.inject.name.Named;

/**
 *
 */
public class F {
  private final String _postfix;
  @Inject
  F(@Named("F's postfix") String postfix) {
    _postfix = postfix;
  }

  public String getInfo() {
    return "F - " + _postfix;
  }
}
