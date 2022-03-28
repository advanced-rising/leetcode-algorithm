<h2><a href="https://leetcode.com/problems/first-bad-version/">278. First Bad Version</a></h2><h3>Easy</h3><hr><div><p papago-id="16" papago-translate="translated">You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.</p>

<p><font papago-id="17" papago-translate="translated">Suppose you have </font><code>n</code><font papago-id="18" papago-translate="translated"> versions </font><code>[1, 2, ..., n]</code><font papago-id="19" papago-translate="translated"> and you want to find out the first bad one, which causes all the following ones to be bad.</font></p>

<p><font papago-id="20" papago-translate="translated">You are given an API </font><code>bool isBadVersion(version)</code><font papago-id="21" papago-translate="translated"> which returns whether </font><code>version</code><font papago-id="22" papago-translate="translated"> is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.</font></p>

<p>&nbsp;</p>
<p><strong papago-id="23" papago-translate="translated">Example 1:</strong></p>

<pre papago-id="24" papago-translate="cached"><strong papago-id="24-0">Input:</strong> n = 5, bad = 4
<strong papago-id="24-2">Output:</strong> 4
<strong papago-id="24-4">Explanation:</strong>
call isBadVersion(3) -&gt; false
call isBadVersion(5)&nbsp;-&gt; true
call isBadVersion(4)&nbsp;-&gt; true
Then 4 is the first bad version.
</pre>

<p><strong papago-id="25" papago-translate="translated">Example 2:</strong></p>

<pre papago-id="26" papago-translate="cached"><strong papago-id="26-0">Input:</strong> n = 1, bad = 1
<strong papago-id="26-2">Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong papago-id="27" papago-translate="translated">Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= bad &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div>