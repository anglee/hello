package org.anglee.hello.module;

/**
 *
 */
public class H implements Hi {

  private String _postfix;

  @Override
  public void setPostfix(String postfix) {
    _postfix = postfix;
  }

  @Override
  public String getInfo() {
    return "H - " + _postfix;
  }
}
