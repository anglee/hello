package org.anglee.hello.module;

/**
 *
 */
public class H implements Hi {

  private final String _postfix;

  H(String postfix) {
    _postfix = postfix;
  }

  @Override
  public String getInfo() {
    return "H - " + _postfix;
  }
}
