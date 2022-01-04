[[root]]

# Language Features

## Leave the constructors for the compiler

```cpp
class A {
private:
    int a = 1;
}
```

```cpp
lass Date {
public:
    Date(int dd, int mm, int yyyy);
    Date() = default; // [See also](#Rc-default)
    // ...
private:
    int dd = 1;
    int mm = 1;
    int yyyy = 1970;
    // ...
};
```

## Delegating constructors

```cpp
class Date2 {
    int d;
    Month m;
    int y;
public:
    Date2(int dd, Month mm, year yy)
        :d{dd}, m{mm}, y{yy}
        { if (!valid(d, m, y)) throw Bad_date{}; }

    Date2(int dd, Month mm)
        :Date2{dd, mm, current_year()} {}
    // ...
};
```

# Tips

- Use copy by value parameter instead of const ref if copy happens in the function
- Test output with color
    
    ```cpp
    std::cerr << "\033[0;31m"
              << "test1"
              << "\033[0m\n";
    ```
    

# Visual Studio
## How to debug a release build

1. Open the **Property Pages** dialog box for the project. For details, see [Set C++ compiler and build properties in Visual Studio](https://docs.microsoft.com/en-us/cpp/build/working-with-project-properties?view=msvc-170).
2. Click the **C/C++** node. Set **Debug Information Format** to [C7 compatible (/Z7)](https://docs.microsoft.com/en-us/cpp/build/reference/z7-zi-zi-debug-information-format?view=msvc-170) or **Program Database (/Zi)**.
3. Expand **Linker** and click the **General** node. Set **Enable Incremental Linking** to [No (/INCREMENTAL:NO)](https://docs.microsoft.com/en-us/cpp/build/reference/incremental-link-incrementally?view=msvc-170).
4. Select the **Debugging** node. Set **Generate Debug Info** to [Yes (/DEBUG)](https://docs.microsoft.com/en-us/cpp/build/reference/debug-generate-debug-info?view=msvc-170).
5. Select the **Optimization** node. Set **References** to [/OPT:REF](https://docs.microsoft.com/en-us/cpp/build/reference/opt-optimizations?view=msvc-170) and **Enable COMDAT Folding** to [/OPT:ICF](https://docs.microsoft.com/en-us/cpp/build/reference/opt-optimizations?view=msvc-170).
6. You can now debug your release build application. To find a problem, step through the code (or use Just-In-Time debugging) until you find where the failure occurs, and then determine the incorrect parameters or code.
    
    If an application works in a debug build, but fails in a release build, one of the compiler optimizations may be exposing a defect in the source code. To isolate the problem, disable selected optimizations for each source code file until you locate the file and the optimization that is causing the problem. (To expedite the process, you can divide the files into two groups, disable optimization on one group, and when you find a problem in a group, continue dividing until you isolate the problem file.)
    
    You can use [/RTC](https://docs.microsoft.com/en-us/cpp/build/reference/rtc-run-time-error-checks?view=msvc-170) to try to expose such bugs in your debug builds.
    
    For more information, see [Optimizing Your Code](https://docs.microsoft.com/en-us/cpp/build/optimizing-your-code?view=msvc-170).

# Doxygen
## Detailed Description

```cpp
/**
 * ... text ...
 */

/********************************************//**
 *  ... text
 ***********************************************/

int var; /**< Detailed description after the member */
int var; ///< Detailed description after the member
         ///<
```

## Brief Description

```cpp
/** Brief description which ends at this dot. Details follow
 *  here.
 */

/** \brief Brief description.
 *         Brief description continued.
 *
 *  Detailed description starts here.
 */

int var; ///< Brief description after the member
```

## File

Let's repeat that, because it is often overlooked: to document global objects (functions, typedefs, enum, macros, etc), you must document the file in which they are defined. In other words, there must at least be a

```cpp
/** \file */
```

For example

```cpp
/** \file structcmd.h
    \brief A Documented file.
    
    Details.
*/
```

## Function

```cpp
/**
 * a normal member taking two arguments and returning an integer value.
 * @param a an integer argument.
 * @param s a constant character pointer.
 * @see Javadoc_Test()
 * @see ~Javadoc_Test()
 * @see testMeToo()
 * @see publicVar()
 * @return The test results
 */
int testMe(int a,const char *s);
```
