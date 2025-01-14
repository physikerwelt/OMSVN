<?xml version="1.0" encoding="utf-8"?>
<!-- $Id: specfun.mcd,v 1.8 2007/06/27 07:42:48 mkohlhas2 Exp $ -->

<mcd id="specfun">
  <title>Elementary Classical Functions</title>
  
  <description>
    <p>The names of the common trigonometric functions supported by MathML are listed
    below. Since their standard interpretations are widely known, they are discussed as a
    group.
    <table border = "1">
      <tbody>
	<tr>
	  <td><el>sin</el></td>
	  <td><el>cos</el></td>
	<td><el>tan</el></td></tr>
	<tr>
	  <td><el>sec</el></td>
	  <td><el>csc</el></td>
	<td><el>cot</el></td></tr>
	<tr>
	  <td><el>sinh</el></td>
	  <td><el>cosh</el></td>
	<td><el>tanh</el></td></tr>
	<tr>
	  <td><el>sech</el></td>
	  <td><el>csch</el></td>
	<td><el>coth</el></td></tr>
	<tr>
	  <td><el>arcsin</el></td>
	  <td><el>arccos</el></td>
	<td><el>arctan</el></td></tr>
	<tr>
	  <td><el>arccosh</el></td>
	  <td><el>arccot</el></td>
	<td><el>arccoth</el></td></tr>
	<tr>
	  <td><el>arccsc</el></td>
	  <td><el>arccsch</el></td>
	<td><el>arcsec</el></td></tr>
	<tr>
	  <td><el>arcsech</el></td>
	  <td><el>arcsinh</el></td>
    <td><el>arctanh</el></td></tr></tbody></table></p>
  </description>
  <discussion>
    <p>These operator elements denote the standard trigonometric functions.</p>
  </discussion>

  <MMLdefinition id="cds_exp" cdrole="application" arity="2">
    <name>exp</name>
    <description>
      <p>This element represents the exponentiation function as described in
      Abramowitz and Stegun, section 4.2.  It takes one argument. </p>
    </description>
    <discussion>
      <p>The <el>exp</el> element represents the exponential
      function associated with the inverse of the <el>ln</el>
      function. In particular, exp(1) is approximately 2.718281828.</p>
    </discussion>
    <classification>unary function</classification>
    <rendering>
      <graphic role="display" source="image/f4098.gif" alt="\eulere^x"/>
    </rendering>
    <signature>(real) -> real</signature>
    <signature>(complex) -> complex</signature>

    <property><![CDATA[<apply><eq/>
  <apply><exp/><cn>0</cn></apply>
  <cn>1</cn>
</apply>]]></property>

    <property>
          <description>
            <p>for all k if k is an integer then e^(z+2*pi*k*i)=e^z </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><exp/><ci> x </ci></apply>]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_ln" cdrole="application" arity="1">
        <name>ln</name>
        <description>
          <p>This element represents the ln function (natural logarithm) as described in
          Abramowitz and Stegun, section 4.1.  It takes one argument.</p>
        </description>
	<discussion>
	  <p>The <el>ln</el> element represents the natural logarithm
	  function.</p>
	</discussion>
        <classification>unary function </classification>
	<rendering>
	  <graphic role="display" source="image/f4099.gif" alt="\ln a"/>
	</rendering>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>-pi lt Im ln x leq pi </p>
          </description>
        </property>
        <MMLexample>
		<description>
        <p>If <var>a</var> = <var>e</var>, (where <var>e</var> is the base of the natural logarithms) this will yield the value 1.</p>
        </description>
		<![CDATA[<apply><ln/><ci> a </ci></apply>]]></MMLexample>
      </MMLdefinition>
      
      <MMLdefinition id="cds_log" cdrole="application" arity="2">
        <name>log</name>
        <description>
          <p>This element represents the log function.  It is defined in Abramowitz and
          Stegun, Handbook of Mathematical Functions, section 4.1 If its first argument is
          a logbase element, it specifies the base and the second argument is the argument
          to which the function is applied using that base.  If no logbase element is
          present, the base is assumed to be 10.</p>
        </description>
	<discussion>
	  <p>The <el>log</el> element is the operator that returns a logarithm to a given
	  base. The base may be specified using a <el>logbase</el> element, which should
	  be the first element following <el>log</el>, i.e. the second child of the
	  containing <el>apply</el> element. If the <el>logbase</el> element is not
	  present, a default base of 10 is assumed.</p>

	  <p>The <el>log</el> function accepts only the <el>logbase</el> schema. If
	  present, the <el>logbase</el> schema denotes the base with respect to which the
	  logarithm is being taken. Otherwise, the log is assumed to be base 10. When used
	  with <el>log</el>, the <el>logbase</el> schema is expected to contain a single
	  child schema; otherwise an error is generated.</p>
	</discussion>
        <classification>function </classification>
	<rendering>
	  <graphic role="display" source="image/f4100.gif" alt="\log_3 x"/>
	</rendering>
        <signature>(logbase,real) -> real</signature>
        <signature>(logbase,complex) -> complex</signature>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>a^b = c implies log_a c = b </p>
          </description>
        </property>
        <MMLexample>
		<description>
        <p>This markup represents <quote>the base 3 logarithm of x</quote>. For natural logarithms base e, the <el>ln</el> element should be used instead.</p>
        </description>
		<![CDATA[<apply><log/>
  <logbase><cn> 3 </cn></logbase>
  <ci> x </ci>
</apply>
]]></MMLexample>
        <MMLexample><![CDATA[<apply><log/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_sin" cdrole="application" arity="1">
        <name>sin</name>
        <description>
          <p>This element represents the sin function as described in Abramowitz and
          Stegun, section 4.3. It takes one argument. </p>
        </description>
        <classification>function </classification>
	<rendering>
	  <ulist>
	  <item><p><graphic role="display" source="image/f4096.gif" alt="\sin x"/></p></item>
	  <item><p><graphic role="display" source="image/f4097.gif" alt="\sin(\cos x + x^3)"/></p></item>
	  </ulist>
	</rendering>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p> sin(0) = 0 </p>
          </description>
        </property>
        <property>
          <description>
            <p> sin(integer*Pi) = 0</p>
          </description><![CDATA[ ]]></property>
        <property>
          <description>
            <p>sin(x) = (exp(ix)-exp(-ix))/2i </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><sin/><ci> x </ci></apply>]]></MMLexample>
	<MMLexample><![CDATA[
<apply>
  <sin/>
  <apply>
    <plus/>
    <apply><cos/>
      <ci> x </ci>
    </apply>
    <apply>
      <power/>
      <ci> x </ci>
      <cn> 3 </cn>
    </apply>
  </apply>
</apply>
]]>
</MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_cos" cdrole="application" arity="1">
        <name>cos</name>
        <description>
          <p>This element represents the cos function as described in
Abramowitz and Stegun, section 4.3. It takes one argument. 
It takes one argument.   </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p> cos(0) = 1</p>
          </description><![CDATA[ ]]></property>
        <property>
          <description>
            <p> cos(integer*Pi+Pi/2) = 0 </p>
          </description>
        </property>
        <property>
          <description>
            <p>cos(x) = (exp(ix)+exp(-ix))/2 </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><cos/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_tan" cdrole="application"  arity="1">
        <name>tan</name>
        <description>
          <p>This element represents the tan function as described in 
Abramowitz and Stegun, section 4.3. It takes one argument. </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p> tan(integer*Pi) = 0 </p>
          </description>
        </property>
        <property>
          <description>
            <p> tan(x) = sin(x)/cos(x)</p>
          </description><![CDATA[ ]]></property>
        <MMLexample><![CDATA[<apply><tan/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_sec" cdrole="application"  arity="1">
        <name>sec</name>
        <description>
          <p>This element represents the sec function 
as described in Abramowitz and Stegun, section 4.3. 
It takes one argument. </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p> sec(x) = 1/cos(x) </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><sec/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_csc" cdrole="application"  arity="1">
        <name>csc</name>
        <description>
          <p>This element represents the csc function as 
described in Abramowitz and Stegun, section 4.3. 
It takes one argument. </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p> csc(x) = 1/sin(x) </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><csc/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_cot" cdrole="application"  arity="1">
        <name>cot</name>
        <description>
          <p>This element represents the cot function as described in 
Abramowitz and Stegun, section 4.3. It takes one argument.  
It takes one argument.  </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p> cot(integer*Pi+Pi/2) = 0</p>
          </description><![CDATA[ ]]></property>
        <property>
          <description>
            <p> cot(x) = cos(x)/sin(x) </p>
          </description>
        </property>
        <property>
          <description>
            <p>cot A = 1/tan A </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><cot/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_sinh" cdrole="application"  arity="1">
        <name>sinh</name>
        <description>
          <p>This element represents the sinh function as described in Abramowitz and
          Stegun, section 4.5. It takes one argument. </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>sinh A = 1/2 * (e^A - e^(-A)) </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><sinh/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_cosh" cdrole="application"  arity="1">
        <name>cosh</name>
        <description>
          <p>This symbol represents the cosh function as described in Abramowitz and
          Stegun, section 4.5. It takes one argument.  It takes one argument.</p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>cosh A = 1/2 * (e^A + e^(-A)) </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><cosh/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_tanh" cdrole="application"  arity="1">
        <name>tanh</name>
        <description>
          <p>This element represents the tanh function as described in 
Abramowitz and Stegun, section 4.5. It takes one argument. </p>
        </description>
        <classification>function</classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>tanh A = sinh A / cosh A </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><tanh/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_sech" cdrole="application"  arity="1">
        <name>sech</name>
        <description>
          <p>This element represents the sech function 
as described in Abramowitz and Stegun, section 4.5. 
It takes one argument. </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>sech A = 1/cosh A </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><sech/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_csch" cdrole="application"  arity="1">
        <name>csch</name>
        <description>
          <p>This element represents the csch function 
as described in Abramowitz and Stegun, section 4.5. 
It takes one argument. </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>csch A = 1/sinh A </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><csch/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_coth" cdrole="application"  arity="1">
        <name>coth</name>
        <description>
          <p>This element represents the coth function as described in 
Abramowitz and Stegun, section 4.5. It takes one argument. </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>coth A = 1/tanh A </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><coth/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_arcsin" cdrole="application"  arity="1">
        <name>arcsin</name>
        <description>
          <p>This element represents the arcsin function which 
is the inverse of the sin function as described in 
Abramowitz and Stegun, section 4.4. It takes one argument. </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>arcsin(z) = -i ln (sqrt(1-z^2)+iz) </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><arcsin/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_arccos" cdrole="application"  arity="1">
        <name>arccos</name>
        <description>
          <p> This element represents the arccos function which is the inverse of the cos function 
as described in Abramowitz and Stegun, section 4.4. It takes one argument. </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>arccos(z) = -i ln(z+i \sqrt(1-z^2)) </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><arccos/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_arctan" cdrole="application"  arity="1">
        <name>arctan</name>
        <description>
          <p>This element represents the arctan function which is the inverse of the tan function 
as described in Abramowitz and Stegun, section 4.4. It takes one argument. </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>arctan(z) = (ln(1+iz)-ln(1-iz))/2i </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><arctan/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_arccosh" cdrole="application"  arity="1">
        <name>arccosh</name>
        <description>
          <p> This symbol represents the arccosh function as described in Abramowitz and
          Stegun, section 4.6.  It takes one argument.</p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>arccosh(z) = 2*ln(\sqrt((z+1)/2) + \sqrt((z-1)/2)) </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><arccosh/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_arccot" cdrole="application"  arity="1">
        <name>arccot</name>
        <description>
          <p>This element represents the arccot function as described in 
Abramowitz and Stegun, section 4.4.  
It takes one argument.  </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>arccot(-z) = - arccot(z) </p>
          </description><![CDATA[ ]]></property>
        <MMLexample><![CDATA[<apply><arccot/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_arccoth" cdrole="application"  arity="1">
        <name>arccoth</name>
        <description>
          <p>This element represents the arccoth function as described 
in Abramowitz and Stegun, section 4.6.  
It takes one argument.  </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>arccoth(z) = (ln(-1-z)-ln(1-z))/2 </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><arccoth/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_arccsc" cdrole="application"  arity="1">
        <name>arccsc</name>
        <description>
          <p>This element represents the arccsc function as described 
in Abramowitz and Stegun, section 4.4.  
It takes one argument.  </p>
        </description>
        <classification>function  </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>arccsc(z) = -i ln(i/z + \sqrt(1 - 1/z^2)) </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><arccsc/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_arccsch" cdrole="application"  arity="1">
        <name>arccsch</name>
        <description>
          <p> This element represents the arccsch function as 
described in Abramowitz and Stegun, section 4.6.  
It takes one argument.  </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>arccsch(z) = ln(1/z + \sqrt(1+(1/z)^2)) </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><arccsch/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_arcsec" cdrole="application"  arity="1">
        <name>arcsec</name>
        <description>
          <p>This element represents the arcsec function as described 
in Abramowitz and Stegun, section 4.4.  
It takes one argument.  </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>arcsec(z) = -i ln(1/z + i \sqrt(1-1/z^2))</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><arcsec/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_arcsech" cdrole="application"  arity="1">
        <name>arcsech</name>
        <description>
          <p>This element represents the arcsech function 
as described in Abramowitz and Stegun, section 4.6. 
It takes one argument.   </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>arcsech(z) = 2 ln(\sqrt((1+z)/(2z)) + \sqrt((1-z)/(2z))) </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><arcsech/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_arcsinh" cdrole="application"  arity="1">
        <name>arcsinh</name>
        <description>
          <p>This element represents the arcsinh function 
as described in Abramowitz and Stegun, section 4.6. 
It takes one argument.</p>
        </description>
        <classification>function</classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>arcsinh z = ln(z + \sqrt(1+z^2)) </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><arcsinh/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_arctanh" cdrole="application"  arity="1">
        <name>arctanh</name>
        <description>
          <p>This element represents the arctanh function as 
described in Abramowitz and Stegun, section 4.6.  
It takes one argument.  </p>
        </description>
        <classification>function </classification>
        <signature>(real) -> real</signature>
        <signature>(complex) -> complex</signature>
        <property>
          <description>
            <p>arctanh(z) = - i * arctan(i * z) </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><arctanh/><ci>x</ci></apply>]]></MMLexample>
      </MMLdefinition>
    </mcd>
