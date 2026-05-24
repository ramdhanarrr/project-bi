<?xml version="1.0" encoding="ISO-8859-1"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:output method="html" indent="no" encoding="US-ASCII"/>
<xsl:param name="context"/>
<xsl:param name="renderId"/>
<xsl:param name="token"/>
<xsl:param name="imgpath" select="'jpivot/toolbar'"/>

<xsl:template match="tool-bar">
  <table border="0" cellspacing="1" cellpadding="0"  id="{$renderId}" class="jpivot-toolbar">
    <tr>
      <xsl:apply-templates/>
    </tr>
  </table>
</xsl:template>

<xsl:template match="tool-button">
  <td class="jpivot-toolbar-item">
    <input class="jpivot-toolbar-icon" type="image" name="{@id}" src="{$context}/{$imgpath}/{@img}.png" border="0" title="{@title}" width="24" height="24"/>
    <span class="jpivot-toolbar-label"><xsl:value-of select="@title"/></span>
  </td>
</xsl:template>

<xsl:template match="tool-sep">
  <td class="jpivot-toolbar-separator">
    <div/>
  </td>
</xsl:template>

<xsl:template match="img-button">
  <td class="jpivot-toolbar-item">
    <a class="jpivot-toolbar-link" href="{@href}">
      <xsl:if test="@target">
        <xsl:attribute name="target"><xsl:value-of select="@target"/></xsl:attribute>
      </xsl:if>
      <img class="jpivot-toolbar-icon" src="{$context}/{$imgpath}/{@img}.png" border="0" title="{@title}" width="24" height="24"/>
      <span class="jpivot-toolbar-label"><xsl:value-of select="@title"/></span>
    </a>
  </td>
</xsl:template>

</xsl:stylesheet>
